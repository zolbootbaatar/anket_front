"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import {
  ArrowRightAltOutlined,
  ArrowRightAltRounded,
} from "@mui/icons-material";

const MerchantTable = ({ datas, setDatas }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const router = useRouter();

  const handleRowClick = (id) => {
    router.push(`/admin/applicant/${id}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = async (id) => {
    console.log("устгах ID:", id);

    if (!confirm("Та энэ хэрэглэгчийн мэдээллийг устгахдаа итгэлтэй байна уу?"))
      return;
    try {
      await axios.delete(`http://localhost:8000/api/v1/applications/${id}`);
      setDatas((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      alert("Устгахад алдаа гарлаа!", error);
      console.error("Delete error:", error);
    }
  };

  // Хэрвээ datas-д утга байхгүй бол хоосон массивыг ашиглах
  const dataArray = Array.isArray(datas) ? datas : [];

  return (
    <Paper elevation={3} sx={{ overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell align="center">
                <strong>№</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Овог</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Нэр</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Утас</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Хүйс</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Устгах</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data, index) => {
                // personal хэсэг нь массив эсвэл шууд объект байж болно
                const personal = Array.isArray(data.personal)
                  ? data.personal[0] || {}
                  : data.personal || {};

                return (
                  <TableRow
                    key={index}
                    hover
                    sx={{
                      cursor: "pointer",
                      "&:nth-of-type(odd)": {
                        backgroundColor: "#fafafa",
                      },
                      "&:hover": {
                        backgroundColor: "#e3f2fd",
                      },
                    }}
                    onClick={(e) => {
                      if (e.target.closest(".delete-btn")) return;
                      handleRowClick(data._id);
                    }}
                  >
                    <TableCell align="center">
                      {page * rowsPerPage + index + 1}
                    </TableCell>
                    <TableCell align="center">
                      {personal.fatherName || "—"}
                    </TableCell>
                    <TableCell align="center">
                      {personal.myName || "—"}
                    </TableCell>
                    <TableCell align="center">
                      {personal.phoneMobile || "—"}
                    </TableCell>
                    <TableCell align="center">
                      {personal.gender || "—"}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        className="delete-btn"
                        onClick={(e) => {
                          // if (e.target.closest(".delete-btn")) return;
                          handleRowClick(data._id);
                        }}
                        // onClick={() => handleDelete(data._id)}
                      >
                        <ArrowRightAltOutlined color="success" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={dataArray.length}
        rowsPerPage={rowsPerPage}
        page={page}
        labelRowsPerPage="Хуудас бүрт:"
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default MerchantTable;
