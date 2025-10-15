# Urban Vibes Coffee ☕

Una landing page moderna para delivery de café premium con sistema de pedidos integrado por WhatsApp.

## 🌟 Características

- **Bourbon Rosado Selectivo**: Café especial seleccionado directamente de caficultores colombianos
- **Sistema de Pedidos**: Integración completa con WhatsApp para pedidos en tiempo real
- **Diseño Responsivo**: Optimizado para móviles y escritorio
- **Delivery Rápido**: Entrega en 30 minutos
- **Apoyo Social**: Comercio justo directo con caficultores

## 🚀 Tecnologías

- **React** con Vite
- **CSS3** con diseño responsivo
- **WhatsApp API** para pedidos
- **Modular Components** para mantenibilidad

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jersonjjcr/URBAN_VIBES_Coffe.git

# Instalar dependencias
cd URBAN_VIBES_Coffe
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Navegación principal
│   ├── Hero.jsx            # Sección principal con CTA
│   ├── Menu.jsx            # Catálogo de productos
│   ├── About.jsx           # Historia y valores de la marca
│   ├── HowToOrder.jsx      # Proceso de pedido
│   ├── Contact.jsx         # Información de contacto
│   ├── Community.jsx       # Comunidad y testimonios
│   ├── Footer.jsx          # Pie de página
│   └── OrderPage.jsx       # Sistema completo de pedidos
├── App.jsx                 # Componente principal
├── App.css                 # Estilos principales
└── main.jsx               # Punto de entrada
```

## 🎨 Paleta de Colores

- **Beige Claro**: `#F4F1EC` (Fondo principal)
- **Azul Petróleo**: `#3B6876` (Acentos)
- **Gris Oscuro**: `#232629` (Texto principal)
- **Beige Oscuro**: `#BDA588` (Elementos secundarios)

## 📱 Funcionalidades

### Sistema de Pedidos
- Catálogo interactivo con precios
- Carrito de compras dinámico
- Formulario de datos del cliente
- Cálculo automático de domicilio
- Envío directo por WhatsApp

### Contenido Auténtico
- Historia real de la marca
- Enfoque en Bourbon Rosado
- Compromiso con caficultores
- Información de delivery

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaFuncionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request

## 📞 Contacto

- **WhatsApp**: +57 302 753 2474
- **Email**: hola@urbanvibes.coffee
- **Horarios**: Lun-Dom 6:00 AM - 10:00 PM

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

---

*Desarrollado con ❤️ para Urban Vibes Coffee*

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
