import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website Development',
          type: 'deposit',
          category: 'Job',
          amount: 6000,
          createdAt: new Date('2022-06-12')
        },
        {
          id: 2,
          title: 'House Rent',
          type: 'withdraw',
          category: 'Home',
          amount: 1200,
          createdAt: new Date('2022-07-18')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)