<template>
  HOC component for technicalmanager
  <ul>
    <li class="link"><router-link to="/technical/user">onclick to list user</router-link></li>
    <li class="link"><router-link to="/technical/filter" >onclick to filter</router-link></li>
    <li class="link"><router-link to="/technical/import" >onclick to import exel</router-link></li>
  </ul>
  <router-view />
</template>

<style scoped>
.link{
  width: fit-content;
  border-radius: 8px;
  margin-top: 20px;
  padding: 5px;
  color: #fff;
  background-color: brown;
}
</style>