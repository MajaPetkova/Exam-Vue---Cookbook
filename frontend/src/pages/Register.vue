<script></script>

<template>
  <h2> Register Page</h2>
  <div class="register-container">
    <div>
      <label for="">Username</label>
      <input type="text">
    </div>
    <div>
      <label for="">Email</label>
      <input type="email">
    </div>
    <div>
      <label for="">Password</label>
      <input type="password">
    </div>
    <div>
      <label for="">Repeat Password</label>
      <input type="password">
    </div>
    <button class="btn">Submit</button>
  </div>
</template>

<style scoped>
h2{
    text-align: center;
    margin: 1.5rem;
}
.register-container{
    padding: 1rem;
    margin-bottom: 1.5rem;
    margin: 0.75rem auto;
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
