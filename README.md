# iosCalculator

Este es un nuevo proyecto de [**React Native**](https://reactnative.dev), creado utilizando [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Introducción

> **Nota**: Asegúrate de haber completado la guía [Configura tu entorno](https://reactnative.dev/docs/set-up-your-environment) antes de continuar.

### Paso 1: Iniciar Metro

Primero, necesitas ejecutar **Metro**, la herramienta de construcción de JavaScript para React Native.

Para iniciar el servidor de desarrollo Metro, ejecuta el siguiente comando desde la raíz de tu proyecto React Native:

```sh
# Usando npm
npm start

# O usando Yarn
yarn start
```

### Paso 2: Construir y ejecutar tu aplicación

Con Metro en ejecución, abre una nueva ventana/pestaña de terminal desde la raíz de tu proyecto React Native y utiliza uno de los siguientes comandos para construir y ejecutar tu aplicación en Android o iOS:

#### Android

```sh
# Usando npm
npm run android

# O usando Yarn
yarn android
```

#### iOS

Para iOS, recuerda instalar las dependencias de CocoaPods (esto solo es necesario la primera vez o después de actualizar dependencias nativas).

1. La primera vez que crees un nuevo proyecto, ejecuta el bundler de Ruby para instalar CocoaPods:

   ```sh
   bundle install
   ```

2. Luego, y cada vez que actualices tus dependencias nativas, ejecuta:

   ```sh
   bundle exec pod install
   ```

   Para más información, visita la [guía de inicio de CocoaPods](https://guides.cocoapods.org/using/getting-started.html).

Finalmente, ejecuta:

```sh
# Usando npm
npm run ios

# O usando Yarn
yarn ios
```

Si todo está configurado correctamente, deberías ver tu nueva aplicación ejecutándose en el emulador de Android, el simulador de iOS o tu dispositivo conectado.

También puedes construir tu aplicación directamente desde Android Studio o Xcode.

### Paso 3: Modificar tu aplicación

Ahora que has ejecutado la aplicación con éxito, ¡hagamos algunos cambios!

Abre `App.tsx` en tu editor de texto favorito y realiza algunos cambios. Cuando guardes, tu aplicación se actualizará automáticamente para reflejar los cambios, gracias a [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

Para recargar manualmente, por ejemplo, para restablecer el estado de tu aplicación, puedes realizar una recarga completa:

- **Android**: Presiona la tecla <kbd>R</kbd> dos veces o selecciona **"Reload"** desde el **Dev Menu**, al que puedes acceder con <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) o <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Presiona <kbd>R</kbd> en el simulador de iOS.

## ¡Felicidades! 🎉

Has ejecutado y modificado con éxito tu aplicación React Native. 🎊

### ¿Qué sigue?

- Si deseas agregar este código de React Native a una aplicación existente, consulta la [guía de integración](https://reactnative.dev/docs/integration-with-existing-apps).
- Si tienes curiosidad por aprender más sobre React Native, consulta la [documentación](https://reactnative.dev/docs/getting-started).

## Solución de problemas

Si tienes problemas para que los pasos anteriores funcionen, consulta la página de [Solución de problemas](https://reactnative.dev/docs/troubleshooting).

## Aprende más

Para aprender más sobre React Native, revisa los siguientes recursos:

- [Sitio web de React Native](https://reactnative.dev) - Aprende más sobre React Native.
- [Guía de inicio](https://reactnative.dev/docs/environment-setup) - Una **visión general** de React Native y cómo configurar tu entorno.
- [Aprende lo básico](https://reactnative.dev/docs/getting-started) - Un **recorrido guiado** por los **fundamentos** de React Native.
- [Blog](https://reactnative.dev/blog) - Lee las últimas publicaciones del **blog oficial** de React Native.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - El repositorio de código abierto en GitHub para React Native.
