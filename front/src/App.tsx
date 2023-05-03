import React, { useState, useEffect } from "react"
import { Container, Table, Pagination, Input } from "semantic-ui-react"
import axios from "axios"
import "semantic-ui-css/semantic.min.css"

interface User {
  id: number
  name: string
  age: number
  gender: string
}

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [activePage, setActivePage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const fetchUsers = async (page: number, itemsPerPage: number) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/users?page=${page}&size=${itemsPerPage}`
      )
      console.log(response.data.content)
      setUsers(response.data.content)
      setTotalPages(response.data.totalPages)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUsers(activePage - 1, itemsPerPage)
  }, [activePage, itemsPerPage])

  const handlePageChange = (
    event: React.MouseEvent<HTMLAnchorElement>,
    pageInfo: any
  ) => {
    console.log(pageInfo.activePage)
    setActivePage(pageInfo.activePage as number)
  }

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setItemsPerPage(Number(event.target.value))
    setActivePage(1)
  }

  return (
    <Container>
      <Input
        type="number"
        placeholder="Items per page"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        style={{ marginBottom: "1rem" }}
      />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.age}</Table.Cell>
              <Table.Cell>{user.gender}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Pagination
                activePage={activePage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  )
}

export default UsersTable
