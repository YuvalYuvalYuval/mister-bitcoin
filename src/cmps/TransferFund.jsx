import React from 'react'

export function TransferFund({ name, maxAmount, transfer }) {
  function updateOutput(ev) {
    const output = document.getElementById('output')
    output.innerText = ev.target.value
  }

  const resetAndtransfer = ev => {
    ev.preventDefault()
    const amount = +ev.target.elements.amount.value
    transfer(amount)
    //reset input and output span
    const output = document.getElementById('output')
    output.innerText = 0
    ev.target.elements.amount.value = 0
  }

  return (
    <form
      onSubmit={resetAndtransfer}
      className="transfer-fund flex column align-center"
    >
      <h2>Transfer Coins to {name}</h2>
      <div>
        <input
          type="range"
          min="0"
          max={maxAmount}
          defaultValue="0"
          name="amount"
          onInput={updateOutput}
        />
        $<span id="output">0</span>
      </div>
      <button>Transfer</button>
    </form>
  )
}
