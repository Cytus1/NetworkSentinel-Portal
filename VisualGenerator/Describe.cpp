#include <iostream>
#include <vector>

struct Color {
    int r;
    int g;
    int b;
};

class Describe {
public:
    void describeCanvas(int width, int height, const std::vector<Color> & pixels) {
        std::cout << "Canvas constructed" << std::endl;
        std::cout << "Width:  " << width << std::endl;
        std::cout << "Height: " << height << std::endl;
        std::cout << "Total pixels: " << pixels.size() << std::endl;
    }
};