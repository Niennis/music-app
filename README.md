# App music

![nextjs](https://img.shields.io/badge/nextjs-15.0.0-blue) ![react](https://img.shields.io/badge/react-18.3.1-teal) ![tailwind](https://img.shields.io/badge/tailwind-3.4.1-lightseagreen) ![mui](https://img.shields.io/badge/mui-15.0.0-darkturquoise)  

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instalación

1. Clonar este repositorio:

    ```sh
    git clone git@github.com:Niennis/music-app.git
    ```
2. Navegar al directorio del proyecto:
    ```sh
    cd mi-app
    ```
3. Instalar las dependencias:
    ```sh
    npm install
    ```

## Para desplegar el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

La aplicación levanta en [http://localhost:3000](http://localhost:3000) en tu navegador.


## Funcionalidades

La aplicación consta de dos funcionalidades:

1. **Buscar artistas musicales.** La búsqueda se realiza por artista, por lo que este campo es obligatorio. Opcionalmente puede incluirse el nombre del usuario, para validar si tiene canciones marcadas como favoritas. Estos valores se guardan en cache local.

2. **Marcar canciones como favoritas.** Permite marcar canciones como favoritas, y guardar este valor en cache.

## Despliegue en Vercel

La aplicación se encuentra desplegada en [Vercel Platform](https://music-app-one-alpha.vercel.app/) de los creadores de Next.js.
