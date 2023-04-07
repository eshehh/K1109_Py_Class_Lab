from tkinter import *
window = Tk()

photo1 = PhotoImage(file = "gif/dog13.gif")
photo2 = PhotoImage(file = "gif/dog14.gif")
label1 = Label(window, image = photo1)
label2 = Label(window, image = photo2)

label1.pack(side=LEFT)
label2.pack(side=LEFT)

window.mainloop()
