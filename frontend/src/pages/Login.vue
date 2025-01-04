<script></script>

<template>
  <h2> Login Page</h2>
  <form class="register-container">
    <div>
      <label for="">Email</label>
      <input type="email">
    </div>
    <div>
      <label for="">Password</label>
      <input type="password">
      <input type="text">
    </div>
    <button class="btn">
      Submit
    </button>
  </form>
</template>

<style scoped>
h2{
    text-align: center;
    margin: 1.5rem;
}
.register-container{
    padding: 1rem;
    margin-bottom: 1.5rem;
    margin: 3rem auto;
    max-width: 640px;
    box-shadow: 4px -5px 24px -7px rgba(0,0,0,0.75);
}
input{
    height: 2rem;
}
.btn{
    background-color: rgb(105, 9, 9);
    border: none;
}
</style>
