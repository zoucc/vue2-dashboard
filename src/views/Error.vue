<template>
  <div class="content-inner">
    <div class="error">
      <i class="fa fa-frown-o"></i>
      <h1>404 Not Found</h1>
    </div>
  </div>;
</template>
<style>
.error {
  color: black;
  text-align: center;
  position: absolute;
  top: 30%;
  margin-top: -50px;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  :global .anticon{
    font-size: 48px;
    margin-bottom: 16px;
  }
  h1 {
    font-family: cursive;
  }
}
</style>
