"use client"
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
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import axios from 'axios'

const MerchantTable = ({ datas, setDatas }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const router = useRouter()

  const handleRowClick = (id) => {
    router.push(`/admin/applicant/${id}`)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleDelete = async (id) => {
    console.log("ustgah ID:", id); 

    if (!confirm("Та энэ хэрэглэгчийн мэдээллийг устгахдаа итгэлтэй байна уу?")) return
    try {
      await axios.delete(`http://localhost:8000/api/v1/experience/${id}`)
      setDatas((prev) => prev.filter((item) => item._id !== id))
    } catch (error) {
      alert("Устгахад алдаа гарлаа!" , error)
      console.error("Delete error:", error)
    }
  }


  return (
    <Paper elevation={3} sx={{ overflow: 'hidden' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell align="center"><strong>№</strong></TableCell>
              <TableCell align="center"><strong>Нэр</strong></TableCell>
              <TableCell align="center"><strong>Нас</strong></TableCell>
              <TableCell align="center"><strong>Утас</strong></TableCell>
              <TableCell align="center"><strong>Хүйс</strong></TableCell>
              <TableCell align="center"><strong>Устгах</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data, index) => {
                const personal = data.personal?.[0] || {}

                return (
                  <TableRow
                    key={index}
                    hover
                    sx={{
                      cursor: 'pointer',
                      '&:nth-of-type(odd)': {
                        backgroundColor: '#fafafa',
                      },
                      '&:hover': {
                        backgroundColor: '#e3f2fd',
                      },
                    }}
                    onClick={(e) => {
                      if (e.target.closest('.delete-btn')) return
                      handleRowClick(data._id)
                    }}
                  >
                    <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell align="center">{personal.myName || "—"}</TableCell>
                    <TableCell align="center">
                      {personal.birthYear ? 2025 - Number(personal.birthYear) : "—"}
                    </TableCell>
                    <TableCell align="center">{personal.phoneMobile || "—"}</TableCell>
                    <TableCell align="center">{personal.gender || "—"}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        className="delete-btn"
                        onClick={() => handleDelete(data._id)}
                      >
                        <DeleteIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={datas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        labelRowsPerPage="Хуудас бүрт:"
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default MerchantTable
