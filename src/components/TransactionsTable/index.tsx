import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";
import deleteButton from "../../assets/delete-button.svg"

export function TransactionsTable(){

    const {transactions} = useTransactions()

    const {deleteTransaction} = useTransactions()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction =>{
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'USD'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt))}
                                </td>
                                <button onClick={() => deleteTransaction(transaction.id)}>
                                    <img src={deleteButton} alt="Delete button" />
                                </button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}