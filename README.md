# Tiendaya iOS App

App iOS para Tiendaya usando Capacitor + GitHub Actions.

## Requisitos

- Node.js 18+
- npm
- Xcode (solo para Mac local)

## Desarrollo local (Mac)

```bash
# Instalar dependencias
npm install

# Agregar plataforma iOS
npx cap add ios

# Abrir en Xcode
npx cap open ios
```

## Build con GitHub Actions

1. Crear repositorio en GitHub
2. Subir este código: `git remote add origin https://github.com/TU_USUARIO/tiendaya-ios.git`
3. Ir a Actions > Build iOS App > Run workflow
4. Descargar el IPA desde Artifacts

## Notas

- La app carga `https://tiendaya.neti.es` en un WebView
- El icono debe ser 1024x1024 (ya incluido como icon.png)
- Bundle ID: `com.tiendaya.app`
