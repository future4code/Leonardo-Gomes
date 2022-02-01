import { useContext } from "react"
import { TableDataContainer } from "./styled"
import { GlobalContext } from "../../contexts/global/GlobalContext"

const DataTable = () => {

    const { states } = useContext(GlobalContext)

    const users = states.users
    return (
        <TableDataContainer>
            <tr>
                <th></th>
                <th className="names">First Name</th>
                <th className="names">Last Name</th>
                <th className="participations">Participation</th>
            </tr>
            {
                users.map((user, index) => {
                    return (
                        <tr key={user.id}>
                            <td className="numbers">{index + 1}</td>
                            <td className="names">{user.firstName}</td>
                            <td className="names">{user.lastName}</td>
                            <td className="participations">{user.participation}%</td>
                        </tr>
                    )
                })
            }
        </TableDataContainer>
    )
}

export default DataTable 