def on_button_pressed_a():
    for index in range(4):
        max7219_matrix.randomize_all()
        max7219_matrix.scroll_text("ahmed mehouachi @!", 75, 500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    max7219_matrix.scroll_text("Hello world!", 75, 500)
input.on_button_pressed(Button.B, on_button_pressed_b)

max7219_matrix.setup(4,
    DigitalPin.P16,
    DigitalPin.P15,
    DigitalPin.P14,
    DigitalPin.P13)
max7219_matrix.for_4_in_1_modules(rotation_direction.CLOCKWISE, False)

def on_forever():
    pass
basic.forever(on_forever)
