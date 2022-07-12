import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";


export function Summary() {
    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>
                    ${summary.deposits}</strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Outcome" />
                </header>
                <strong>- ${summary.withdraws}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Summary</p>
                    <img src={total} alt="Summary" />
                </header>
                <strong>${summary.total}</strong>
            </div>
        </Container>
    )
}