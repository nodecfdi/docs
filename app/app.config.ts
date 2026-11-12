export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      secondary: 'lime',
      neutral: 'zinc',
    },
    icons: {
      arrowDown: 'i-tabler-arrow-down',
      arrowLeft: 'i-tabler-arrow-left',
      arrowRight: 'i-tabler-arrow-right',
      arrowUp: 'i-tabler-arrow-up',
      caution: 'i-tabler-alert-square-rounded',
      check: 'i-tabler-check',
      chevronDoubleLeft: 'i-tabler-chevrons-left',
      chevronDoubleRight: 'i-tabler-chevrons-right',
      chevronDown: 'i-tabler-chevron-down',
      chevronLeft: 'i-tabler-chevron-left',
      chevronRight: 'i-tabler-chevron-right',
      chevronUp: 'i-tabler-chevron-up',
      close: 'i-tabler-x',
      copy: 'i-tabler-copy',
      copyCheck: 'i-tabler-copy-check',
      dark: 'i-tabler-moon',
      drag: 'i-tabler-grip-vertical',
      ellipsis: 'i-tabler-dots',
      error: 'i-tabler-square-rounded-x',
      external: 'i-tabler-external-link',
      eye: 'i-tabler-eye',
      eyeOff: 'i-tabler-eye-off',
      file: 'i-tabler-file',
      folder: 'i-tabler-folder',
      folderOpen: 'i-tabler-folder-open',
      hash: 'i-tabler-hash',
      info: 'i-tabler-info-square-rounded',
      light: 'i-tabler-sun',
      loading: 'i-tabler-loader-2',
      menu: 'i-tabler-menu',
      minus: 'i-tabler-minus',
      panelClose: 'i-tabler-layout-sidebar-left-collapse',
      panelOpen: 'i-tabler-layout-sidebar-left-expand',
      plus: 'i-tabler-plus',
      reload: 'i-tabler-reload',
      search: 'i-tabler-search',
      stop: 'i-tabler-player-stop',
      star: 'i-tabler-star',
      success: 'i-tabler-square-rounded-check',
      system: 'i-tabler-device-desktop',
      tip: 'i-tabler-bulb',
      upload: 'i-tabler-upload',
      warning: 'i-tabler-alert-triangle',
    },
    prose: {
      codeIcon: {
        ts: 'i-tabler-brand-typescript',
      },
    },
    card: {
      defaultVariants: {
        variant: 'subtle',
      },
    },
    alert: {
      defaultVariants: {
        variant: 'subtle',
      },
    },
    empty: {
      defaultVariants: {
        variant: 'subtle',
      },
    },
    button: {
      defaultVariants: {
        size: 'lg',
      },
    },
    badge: {
      defaultVariants: {
        size: 'lg',
      },
    },
    input: {
      defaultVariants: {
        variant: 'subtle',
        size: 'lg',
      },
    },
    select: {
      defaultVariants: {
        variant: 'subtle',
        size: 'lg',
      },
    },
    textarea: {
      defaultVariants: {
        variant: 'subtle',
        size: 'lg',
      },
    },
    selectMenu: {
      defaultVariants: {
        variant: 'subtle',
        size: 'lg',
      },
    },
    inputMenu: {
      defaultVariants: {
        variant: 'subtle',
        size: 'lg',
      },
    },
    inputNumber: {
      defaultVariants: {
        variant: 'subtle',
        size: 'lg',
      },
    },
    inputTags: {
      defaultVariants: {
        variant: 'subtle',
        size: 'lg',
      },
    },
    inputDate: {
      defaultVariants: {
        variant: 'subtle',
        size: 'lg',
      },
    },
    inputTime: {
      defaultVariants: {
        variant: 'subtle',
        size: 'lg',
      },
    },
    pinInput: {
      defaultVariants: {
        variant: 'subtle',
        size: 'lg',
      },
    },
    inputRating: {
      defaultVariants: {
        size: 'lg',
      },
    },
    tabs: {
      defaultVariants: {
        size: 'lg',
      },
    },
    checkbox: {
      defaultVariants: {
        size: 'lg',
      },
    },
    checkboxGroup: {
      defaultVariants: {
        size: 'lg',
      },
    },
    radioGroup: {
      defaultVariants: {
        size: 'lg',
      },
    },
    switch: {
      defaultVariants: {
        size: 'lg',
      },
    },
    slider: {
      defaultVariants: {
        size: 'lg',
      },
    },
    stepper: {
      defaultVariants: {
        size: 'lg',
      },
    },
    calendar: {
      defaultVariants: {
        size: 'lg',
      },
    },
    colorPicker: {
      defaultVariants: {
        size: 'lg',
      },
    },
    fileUpload: {
      defaultVariants: {
        size: 'lg',
      },
    },
    formField: {
      defaultVariants: {
        size: 'lg',
      },
    },
    fieldGroup: {
      defaultVariants: {
        size: 'lg',
      },
    },
    dropdownMenu: {
      defaultVariants: {
        size: 'lg',
      },
    },
    contextMenu: {
      defaultVariants: {
        size: 'lg',
      },
    },
    commandPalette: {
      defaultVariants: {
        size: 'lg',
      },
    },
    listbox: {
      defaultVariants: {
        size: 'lg',
      },
    },
  },
  seo: {
    siteName: 'NodeCFDI - Paquetes para CFDI y relacionados al SAT',
  },
  header: {
    to: '/',
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-tabler-brand-github',
      'to': 'https://github.com/nodecfdi',
      'target': '_blank',
      'aria-label': 'GitHub',
    }],
  },
  toc: {
    title: 'Tabla de contenido',
    bottom: {
      title: 'Comunidad',
      edit: 'https://github.com/nodecfdi/docs/edit/main/content',
      links: [{
        icon: 'i-tabler-social',
        label: 'Síguenos en GitHub',
        to: 'https://github.com/nodecfdi',
        target: '_blank',
      }],
    },
  },
});
