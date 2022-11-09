#include <GL/glut.h>
#include <iostream>
#include <stdio.h>

// (or others, depending on the system in use)
void init (void)
{
    glClearColor (1.0, 1.0, 1.0, 0.0);    // Set display-window color to white.
    glMatrixMode (GL_PROJECTION);         // Set projection parameters.
    gluOrtho2D (0.0, 400.0, 0.0, 400.0);  //coordinate limits for the picture we want to display.
}
void lineSegment (void)
{
    glClear (GL_COLOR_BUFFER_BIT);        // Clear display window.

    glColor3f (0.0, 0.4, 2.0);            // Set line segment color to green.
    glBegin (GL_LINES);
      glVertex2i (1, 2);                 // Specify line-segment geometry.
      glVertex2i (100, 20);

      glVertex2i (10, 200);                 // Specify line-segment geometry.
      glVertex2i (50, 10);

      glVertex2i (300, 300);                 // Specify line-segment geometry.
      glVertex2i (10, 10);

      glVertex2i (200, 300);                 // Specify line-segment geometry.
      glVertex2i (250, 50);

      glVertex2i (350, 350);                 // Specify line-segment geometry.
      glVertex2i (100, 300);


    glEnd ( );
    glFlush ( );                    // Process all OpenGL routines as quickly as possible.
}

void points (void) {
    glClear (GL_COLOR_BUFFER_BIT);
    glColor3f (0.0, 0.4, 0.2);
    glBegin (GL_POINTS);
    for (int i = 0; i<400; i+=5)
      glVertex2i (i, i);
    glEnd ();
    glFlush();
}

int main (int argc, char** argv)
{
    glutInit (&argc, argv);    // Initialize GLUT.
    glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);    // Set display mode.
    glutInitWindowPosition (50, 100);    // Set top-left display-window position.
    glutInitWindowSize (400, 400);    // Set display-window width and height.
    glutCreateWindow ("An Example OpenGL Program"); // Create display window.
    init (); // Execute initialization procedure.
    glutDisplayFunc(lineSegment);    // Send graphics to display window.
    //glutDisplayFunc (points);
    glutMainLoop ( );    // Display everything and wait.
    return 0;
}
