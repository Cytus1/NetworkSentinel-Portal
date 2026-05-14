#include <iostream>
#include <vector>

struct Color {
    int r;
    int g;
    int b;
};

class Canvas {

private:
    int width;
    int height;
    std::vector<Color> pixels;

public:
    Canvas(int w, int h) {
        width = w;
        height = h;

        initBlankPage();
    }

    void initBlankPage() {
        Color white = {255, 255, 255};

        pixels.resize(width * height);

        for (int i = 0; i < pixels.size(); i++) {
            pixels[i] = white;
        }
    }
};
