const hre = require('hardhat');
const { ethers } = require('hardhat');

async function main() {
  const Example1 = await ethers.getContractFactory('Example1');
  const example1 = await Example1.deploy();
  console.log('EXAMPLE1', example1);

  console.log('Адрес контракта Example1: ', example1.target);

  const Example2 = await ethers.getContractFactory('Example2');
  const example2 = await Example2.deploy(example1.target);

  console.log('Адрес контракта Example2: ', example2.target);

  console.log('\n === setNumber Example1 === \n');
  await example1.setNumber(1);
  console.log(await example1.getNumber());

  console.log('\n === setNumber Example2 === \n');
  await example2.setNumber(2);
  console.log(await example2.getNumber());

  console.log('\n === setStr Example1 === \n');
  await example1.setStr('hi');
  console.log(await example1.getStr());

  console.log('\n === setStr Example2 === \n');
  await example2.setStr('hello');
  console.log(await example2.getStr());

  const wallet = ethers.Wallet.createRandom();
  console.log(wallet);
  await hre.network.provider.send('hardhat_setBalance', [wallet.address, '0x1000']);

  await hre.network.provider.send('hardhat_setBalance', [example1.target, '0x1000']);

  const contractBal = await ethers.provider.getBalance(wallet.address);
  console.log(contractBal);

  const res = await example1.sendEth(wallet.address, 500);
  console.log(res);

  const res2 = await example2.sendEth(wallet.address, 500);
  console.log(res2);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
