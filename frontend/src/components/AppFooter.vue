<template>
  <div class="footer-container">
    <h4>Mama's <b>Kitchen</b></h4>
    <div class="footer">
      <div class="icons">
        <h3>Follow us</h3>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-tiktok"></i>
        <i class="fa-brands fa-square-whatsapp"></i>
      </div>
      <div class="learn-more">
        <h3>Learn more</h3>
        <p>Jobs</p>
        <p>FAQ</p>
        <p>Newsletters</p>
        <p>Feedback</p>
      </div>
    </div>
    <h6>All rights reserved ©2025</h6>
  </div>
</template>

<style>
.footer-container {
  padding: 1rem;
  background-color: rgb(105, 9, 9);
  height: 240px;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-bottom: 0;
  /* position:relative; */
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 0 5rem;
}

h4 {
  text-align: center;
  color: aliceblue;
  font-family: "Dancing Script";
  font-size: 1.5rem;
}

.icons {
  text-align: left;
}

p {
  color: aliceblue;
  font-size: 0.75rem;
}

h3 {
  color: aliceblue;
  font-weight: 100;
  padding-left: 0.4rem;
}

.learn-more {
  display: flex;
  flex-direction: column;
  color: aliceblue;
  text-align: center;

}

h6 {
  text-align: center;
  color: black
}

i {
  color: aliceblue;
  font-size: 30px;
  padding: 0.4rem;
}
</style>
