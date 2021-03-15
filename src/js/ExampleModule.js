export default {
    isOpen: false,
    init() {
        console.log('🚀')
        window.onscroll = e => {
            console.log('scrolled!', e)
        }
    },
    open() {
        this.isOpen = true
    },
    close() {
        this.isOpen = false
    },
    toggle() {
        if (this.isOpen) {
            this.close()
        } else {
            this.open()
        }
    }
}