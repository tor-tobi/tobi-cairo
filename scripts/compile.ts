import hardhat from 'hardhat'

async function main () {
  await hardhat.run('starknet-compile-deprecated', {
    paths: ['contracts/tree.cairo'],
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })