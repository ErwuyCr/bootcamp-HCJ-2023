class Sidebars{
    private buttonSidebarTop: HTMLButtonElement;
    private buttonSidebarRight: HTMLButtonElement;
    private buttonSidebarLeft: HTMLButtonElement;
    private buttonSidebarBottom: HTMLButtonElement;
    private buttonCloseSidebarTop: HTMLButtonElement;
    private buttonCloseSidebarRight: HTMLButtonElement;
    private buttonCloseSidebarLeft: HTMLButtonElement;
    private buttonCloseSidebarBottom: HTMLButtonElement;
    constructor() {
        this.buttonSidebarTop = document.getElementById('button_sidebar_top')! as HTMLButtonElement;
        this.buttonSidebarRight = document.getElementById("button_sidebar_right")! as HTMLButtonElement;
        this.buttonSidebarLeft = document.getElementById("button_sidebar_left")! as HTMLButtonElement;
        this.buttonSidebarBottom = document.getElementById("button_sidebar_bottom")! as HTMLButtonElement;

        this.buttonCloseSidebarTop = document.getElementById("btn-sidebar-top")! as HTMLButtonElement;
        this.buttonCloseSidebarRight = document.getElementById("btn-sidebar-right")! as HTMLButtonElement;
        this.buttonCloseSidebarLeft = document.getElementById("btn-sidebar-left")! as HTMLButtonElement;
        this.buttonCloseSidebarBottom = document.getElementById("btn-sidebar-bottom")! as HTMLButtonElement;

        console.log(this.buttonSidebarTop);

        this.attachEvents();
    }

    public attachEvents(): void {
        this.buttonSidebarTop.addEventListener('click', ()=>{
            document.getElementById("container-sidebar-top")!.style.display = 'block';
        });
        this.buttonCloseSidebarTop.addEventListener("click",(event)=>{
            document.getElementById("container-sidebar-top")!.style.display = 'none';
        });

        this.buttonSidebarRight.addEventListener('click',()=>{
            document.getElementById("container-sidebar-right")!.style.display = 'block';
        });
        this.buttonCloseSidebarRight.addEventListener("click",(event)=>{
            document.getElementById("container-sidebar-right")!.style.display = 'none';
        });

        this.buttonSidebarLeft.addEventListener('click',()=>{
            document.getElementById("container-sidebar-left")!.style.display = 'block';
        });
        this.buttonCloseSidebarLeft.addEventListener("click",(event)=>{
            document.getElementById("container-sidebar-left")!.style.display = 'none';
        });

        this.buttonSidebarBottom.addEventListener('click',()=>{
            document.getElementById("container-sidebar-bottom")!.style.display = 'block';
        });
        this.buttonCloseSidebarBottom.addEventListener("click",(event)=>{
            document.getElementById("container-sidebar-bottom")!.style.display = 'none';
        });
    }
}

const sidebar = new Sidebars();
