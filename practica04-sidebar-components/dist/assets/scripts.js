"use strict";
class Sidebars {
    constructor() {
        this.buttonSidebarTop = document.getElementById('button_sidebar_top');
        this.buttonSidebarRight = document.getElementById("button_sidebar_right");
        this.buttonSidebarLeft = document.getElementById("button_sidebar_left");
        this.buttonSidebarBottom = document.getElementById("button_sidebar_bottom");
        this.buttonCloseSidebarTop = document.getElementById("btn-sidebar-top");
        this.buttonCloseSidebarRight = document.getElementById("btn-sidebar-right");
        this.buttonCloseSidebarLeft = document.getElementById("btn-sidebar-left");
        this.buttonCloseSidebarBottom = document.getElementById("btn-sidebar-bottom");
        console.log(this.buttonSidebarTop);
        this.attachEvents();
    }
    attachEvents() {
        this.buttonSidebarTop.addEventListener('click', () => {
            document.getElementById("container-sidebar-top").style.display = 'block';
        });
        this.buttonCloseSidebarTop.addEventListener("click", (event) => {
            document.getElementById("container-sidebar-top").style.display = 'none';
        });
        this.buttonSidebarRight.addEventListener('click', () => {
            document.getElementById("container-sidebar-right").style.display = 'block';
        });
        this.buttonCloseSidebarRight.addEventListener("click", (event) => {
            document.getElementById("container-sidebar-right").style.display = 'none';
        });
        this.buttonSidebarLeft.addEventListener('click', () => {
            document.getElementById("container-sidebar-left").style.display = 'block';
        });
        this.buttonCloseSidebarLeft.addEventListener("click", (event) => {
            document.getElementById("container-sidebar-left").style.display = 'none';
        });
        this.buttonSidebarBottom.addEventListener('click', () => {
            document.getElementById("container-sidebar-bottom").style.display = 'block';
        });
        this.buttonCloseSidebarBottom.addEventListener("click", (event) => {
            document.getElementById("container-sidebar-bottom").style.display = 'none';
        });
    }
}
const sidebar = new Sidebars();
