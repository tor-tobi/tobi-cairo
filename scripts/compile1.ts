import hardhat from 'hardhat'

async function main () {
  await hardhat.run('starknet-compile', {
    paths: ['contracts/cairo1/contract1.cairo'],
    allowedLibfuncsListName: 'experimental_v0.1.0',
    addPythonicHints: true,
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })