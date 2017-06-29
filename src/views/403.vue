<template>
  <div>
    <p class="page-container">
      <h1>403</h1>
      <h2>您无权访问:{{$route.params.path}}</h2>
    </p>
  </div>
</template>

<style lang="scss" scoped>
    .page-container,h1,h2{
        /*background: #ffffff;*/
        font-size: 20px;
        text-align: center;
        color: rgb(192, 204, 218);
    }
    h1{
      font-size:64px;
    }
    h2{
      font-size:30px;
    }
</style>
