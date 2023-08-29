import React, { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";
import { TweenMax, Power4 } from "gsap";

const Container = styled.div`
  .magnetic {
    margin: -100px;
    padding: 100px;
    display: inline-block;
    border-radius: 50%;
  }
`;

interface ButtonMagnetProps {
  children: ReactNode;
}

const ButtonMagnet: FC<ButtonMagnetProps> = ({ children }) => {
  const strength = 50;

  const moveMagnet = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const magnetButton = event.currentTarget;
    const bounding = magnetButton.getBoundingClientRect();

    TweenMax.to(magnetButton, 1, {
      x:
        ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
        strength,
      y:
        ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
        strength,
      ease: Power4.easeOut,
    });
  };

  const resetMagnet = (event: React.MouseEvent<HTMLDivElement>) => {
    const magnetButton = event.currentTarget;
    TweenMax.to(magnetButton, 1, { x: 0, y: 0, ease: Power4.easeOut });
  };

  useEffect(() => {
    const magnets = document.querySelectorAll(".magnetic");

    const moveMagnetListener = (event: Event) => {
      if (event instanceof MouseEvent) {
        moveMagnet(event as MouseEvent); // Cast to MouseEvent
      }
    };

    const resetMagnetListener = (event: Event) => {
      if (event instanceof MouseEvent) {
        resetMagnet(event as MouseEvent); // Cast to MouseEvent
      }
    };

    magnets.forEach((magnet) => {
      magnet.addEventListener("mousemove", moveMagnetListener);
      magnet.addEventListener("mouseout", resetMagnetListener);
    });

    return () => {
      magnets.forEach((magnet) => {
        magnet.removeEventListener("mousemove", moveMagnetListener);
        magnet.removeEventListener("mouseout", resetMagnetListener);
      });
    };
  }, []);

  return (
    <Container>
      <div className="container">
        <div className="row m-">
          <div className="col">
            <div className="display-block">
              <div className="magnetic">
                <div className="btn btn-outline-primary magnet-button">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ButtonMagnet;
