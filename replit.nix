{pkgs}: {
  deps = [
    pkgs.java-service-wrapper
    pkgs.haskellPackages.gi-javascriptcore
    pkgs.vimPlugins.vim-javascript
    pkgs.javascript-typescript-langserver
  ];
}
