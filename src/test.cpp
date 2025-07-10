// 值传递
void passByValue(int value) {
    value = 100;
}

// 引用传递
void passByRefer(int &value) {
    value = 100;
}

int a = 20;

// a = 20 
passByValue(a);

// a = 100
passByRefer(a);
