"""
Run the program by writing the following in the terminal => python3 bresenham.py
"""

from random import randint

def bresenham(x1, y1, x2, y2):
 
    m_new = 2 * (y2 - y1)
    slope_error_new = m_new - (x2 - x1)
 
    y = y1

    # was trying to make the step small with arange and linspace
    # points = arange(x1, x2, 0.1)
    # print(points)
    # pointsy = arange(y1, y2, 0.1)
    # print(pointsy)

    points = []

    # we go from x1 to x2 including, step of 0.1
    for x in range(x1, x2 + 1):
        # print(f"{x, y}", end=" ")
        points.append((x, y))
 
        # Add slope to increment angle formed
        slope_error_new = slope_error_new + m_new
 
        # Slope error reached limit, time to increment 'y' and update slope error.
        if (slope_error_new >= 0):
            y = y + 1
            slope_error_new = slope_error_new - 2 * (x2 - x1)
    
    return points

if __name__ == '__main__':
    x1 = randint(0, 5)
    y1 = randint(0, 5)
    x2 = randint(5, 10)
    y2 = randint(5, 10)

    print(f"Point 1: {x1, y1}")
    print(f"Point 2: {x2, y2}")
 
    # Function call
    print("Points of the line:")
    lis = bresenham(x1, y1, x2, y2)
    print(lis)