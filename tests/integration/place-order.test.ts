test('should place an order', async () => {
  const placeOrder = new PlaceOrder()
  const input = {
    cpf: '839.435.452-10',
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 }
    ],
    date: new Date('2021-12-10')
  }

  const output = placeOrder.execute(input)

  expect(output.total).toBe(1000)
})
