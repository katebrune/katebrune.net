'use strict'
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id =
  'vendor-chunks/@radix-ui+react-direction@1.1.1_@types+react@19.2.14_react@19.2.4'
exports.ids = [
  'vendor-chunks/@radix-ui+react-direction@1.1.1_@types+react@19.2.14_react@19.2.4',
]
exports.modules = {
  /***/ '(ssr)/../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-direction/dist/index.mjs':
    /*!********************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-direction/dist/index.mjs ***!
  \********************************************************************************************************************************************************/
    /***/ (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DirectionProvider: () => (/* binding */ DirectionProvider),\n/* harmony export */   Provider: () => (/* binding */ Provider),\n/* harmony export */   useDirection: () => (/* binding */ useDirection)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../node_modules/.pnpm/next@15.5.12_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../node_modules/.pnpm/next@15.5.12_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");\n// packages/react/direction/src/direction.tsx\n\n\nvar DirectionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);\nvar DirectionProvider = props => {\n  const {\n    dir,\n    children\n  } = props;\n  return /* @__PURE__ */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DirectionContext.Provider, {\n    value: dir,\n    children\n  });\n};\nfunction useDirection(localDir) {\n  const globalDir = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);\n  return localDir || globalDir || "ltr";\n}\nvar Provider = DirectionProvider;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1kaXJlY3Rpb25AMS4xLjFfQHR5cGVzK3JlYWN0QDE5LjIuMTRfcmVhY3RAMTkuMi40L25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtZGlyZWN0aW9uL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDK0I7QUFDUztBQUN4QyxJQUFJRSxnQkFBZ0IsZ0JBQUdGLGdEQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xELElBQUlJLGlCQUFpQixHQUFJQyxLQUFLLElBQUs7RUFDakMsTUFBTTtJQUFFQyxHQUFHO0lBQUVDO0VBQVMsQ0FBQyxHQUFHRixLQUFLO0VBQy9CLE9BQU8sZUFBZ0JKLHNEQUFHLENBQUNDLGdCQUFnQixDQUFDTSxRQUFRLEVBQUU7SUFBRUMsS0FBSyxFQUFFSCxHQUFHO0lBQUVDO0VBQVMsQ0FBQyxDQUFDO0FBQ2pGLENBQUM7QUFDRCxTQUFTRyxZQUFZQSxDQUFDQyxRQUFRLEVBQUU7RUFDOUIsTUFBTUMsU0FBUyxHQUFHWiw2Q0FBZ0IsQ0FBQ0UsZ0JBQWdCLENBQUM7RUFDcEQsT0FBT1MsUUFBUSxJQUFJQyxTQUFTLElBQUksS0FBSztBQUN2QztBQUNBLElBQUlKLFFBQVEsR0FBR0osaUJBQWlCIiwic291cmNlcyI6WyIvVXNlcnMva2F0ZWJydW5lL2Rldi9zcmMvZ2l0aHViL2thdGVicnVuZS9rYXRlYnJ1bmUubmV0L25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtZGlyZWN0aW9uQDEuMS4xX0B0eXBlcytyZWFjdEAxOS4yLjE0X3JlYWN0QDE5LjIuNC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWRpcmVjdGlvbi9kaXN0L2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWNrYWdlcy9yZWFjdC9kaXJlY3Rpb24vc3JjL2RpcmVjdGlvbi50c3hcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsganN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG52YXIgRGlyZWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodm9pZCAwKTtcbnZhciBEaXJlY3Rpb25Qcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGRpciwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChEaXJlY3Rpb25Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBkaXIsIGNoaWxkcmVuIH0pO1xufTtcbmZ1bmN0aW9uIHVzZURpcmVjdGlvbihsb2NhbERpcikge1xuICBjb25zdCBnbG9iYWxEaXIgPSBSZWFjdC51c2VDb250ZXh0KERpcmVjdGlvbkNvbnRleHQpO1xuICByZXR1cm4gbG9jYWxEaXIgfHwgZ2xvYmFsRGlyIHx8IFwibHRyXCI7XG59XG52YXIgUHJvdmlkZXIgPSBEaXJlY3Rpb25Qcm92aWRlcjtcbmV4cG9ydCB7XG4gIERpcmVjdGlvblByb3ZpZGVyLFxuICBQcm92aWRlcixcbiAgdXNlRGlyZWN0aW9uXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwianN4IiwiRGlyZWN0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJEaXJlY3Rpb25Qcm92aWRlciIsInByb3BzIiwiZGlyIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsInZhbHVlIiwidXNlRGlyZWN0aW9uIiwibG9jYWxEaXIiLCJnbG9iYWxEaXIiLCJ1c2VDb250ZXh0Il0sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-direction/dist/index.mjs\n',
      )

      /***/
    },
}
