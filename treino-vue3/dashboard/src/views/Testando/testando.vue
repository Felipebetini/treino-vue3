<template>
<div v-if="name === blue">
    <div class="blue" ></div>
</div>
<div v-if="name === red">
    <div class="red" ></div>
</div>
<div v-if="name === pink">
    <div class="pink" ></div>
</div>
  <div class="div1">
  <span>Eu gosto de:
    <input type="text" v-model="name" class="input " >
  </span>
  </div>
  <div>
    <h1 class="h1">
      {{ name }}
    </h1>
  </div>

</template>

<script>
export default {
  data: () => ({
    name: '',
    blue: 'blue',
    red: 'red',
    pink: 'pink'
  })
}
</script>

<style scoped>
.div1{
  height: 200px;
  text-align: center;
}
.h1{
  text-align: center;
  margin: auto;
  border: solid black
}

.input{
  width: 300px;
  height: 50px;
  margin: auto;
  text-align: center;
  margin-top: 80px;
  -webkit-transition: width .35s ease-in-out;
  transition: width .35s ease-in-out;
  box-shadow: 2px 2px 2px 2px black;
}

.input:focus{
  width: 500px;
  outline: none;
}

.blue{
background: darkblue;
height: 500px;
-webkit-transition: width .35s ease-in-out;
  transition: width .35s ease-in-out;
}
.red{
background: red;
height: 500px;
-webkit-transition: .35s ease-in-out;
  transition: .35s ease-in-out;
}
.pink{
background: pink;
height: 500px;
-webkit-transition: .35s ease-in-out;
  transition: .35s ease-in-out;
}
</style>>
