const main = async () =>{
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deployed by:", deployer.address);
    console.log("Account balance:", accountBalance);

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({value: hre.ethers.utils.parseEther("0.001")});
    await waveContract.deployed();

    console.log("Deployed to address:", waveContract.address);
}

main()
.then( () =>  process.exit(0) )
.catch( (err) => {
   console.log(err);
   process.exit(1);
});