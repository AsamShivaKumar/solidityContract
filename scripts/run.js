const main = async() => {
     
     const [owner,user] = await hre.ethers.getSigners();
     const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
     const waveContract = await waveContractFactory.deploy();
     await waveContract.deployed();
     console.log("Contract deployed to ", waveContract.address);
     
     let waveCount = await waveContract.getWaveCount();
     console.log("Before - Wave Count: ", Number(waveCount));
     
     await waveContract.wave("Hello!");
     
     waveCount = await waveContract.getWaveCount();
     console.log("After - Wave Count: ", Number(waveCount));

     await waveContract.connect(user);
     await waveContract.wave("Hello!");
     console.log(user.address);
     var msgs = await waveContract.getMsgs();
     console.log(msgs);
     waveCount = await waveContract.getWaveCount();
     console.log("After - Wave Count: ", Number(waveCount));
}

main()
.then( () => {
  process.exit(0);
})
.catch( (err) =>{
  console.error(err);
  process.exit(1);
});