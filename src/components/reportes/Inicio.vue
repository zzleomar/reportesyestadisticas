<template>
	<div>
    <header class="app-header fixed-top">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">AVCA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#adminHeader"
          aria-controls="adminHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="adminHeader">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user-circle"></i> pperez <span class="caret"></span>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Salir
                </a>
                <form id="logout-form" action="#" method="POST" style="display: none;">
                </form>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="app-body d-flex px-0" style="margin-top: 55px;">
      <aside class="sidebar sidebar-fixed bg-dark text-white pt-3 pb-5" id="style-scroll">
        <nav class="sidebar-nav">
          <ul class="nav flex-column h-100">
            <li class="nav-item">
              <a class="nav-link" style="font-size: 1.2rem; color: whitesmoke;" href="#">Gerente General </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#reporteyestadisticas" role="button" aria-expanded="false" aria-controls="reporteyestadisticas">
                <i class="fas fa-chart-line"></i>
                 Reportes y estadísticas
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </a>
              <div class="collapse" id="reporteyestadisticas">
                <ul class="nav pl-3 flex-column">
                  <li class="nav-item"><a href="#" class="nav-link">Consultas Personalizadas</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Busqueda Compleja</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Diagnostico</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </aside>

      <main class="content w-100" id="app">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">Inicio</li>
        </ol>
        <div class="container-fluid py-3">
           <Panel></Panel> 
        </div>
      </main>

    </div>

    <footer class="app-footer fixed-bottom">
      ...
    </footer>
	</div>	
</template>
<script>
	import PANEL from './panel.vue'

export default {
  name: "inicio",
  components:{
    Panel:PANEL
  }
};
</script>