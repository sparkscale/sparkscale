"use client";

import React from 'react';
import { gsap } from 'gsap';

import './FlowingMenu.css';

interface MenuItem {
  link: string;
  text: string;
  marqueeText?: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItem[];
}

function FlowingMenu({ items = [] }: FlowingMenuProps) {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItemComponent key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItemComponent({ link, text, marqueeText, image }: MenuItem) {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
  const isHoveredRef = React.useRef(false);
  const currentMousePos = React.useRef({ x: 0, y: 0 });

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x: number, y: number, x2: number, y2: number): number => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const startHoverAnimation = (mouseX: number, mouseY: number) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current || isHoveredRef.current) return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const x = mouseX - rect.left;
    const y = mouseY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    isHoveredRef.current = true;
    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const stopHoverAnimation = (mouseX: number, mouseY: number) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current || !isHoveredRef.current) return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const x = mouseX - rect.left;
    const y = mouseY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    isHoveredRef.current = false;
    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  const checkHoverState = () => {
    if (!itemRef.current) return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const isCurrentlyHovered = (
      currentMousePos.current.x >= rect.left &&
      currentMousePos.current.x <= rect.right &&
      currentMousePos.current.y >= rect.top &&
      currentMousePos.current.y <= rect.bottom
    );
    
    if (isCurrentlyHovered && !isHoveredRef.current) {
      startHoverAnimation(currentMousePos.current.x, currentMousePos.current.y);
    } else if (!isCurrentlyHovered && isHoveredRef.current) {
      stopHoverAnimation(currentMousePos.current.x, currentMousePos.current.y);
    }
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    currentMousePos.current = { x: ev.clientX, y: ev.clientY };
    startHoverAnimation(ev.clientX, ev.clientY);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    currentMousePos.current = { x: ev.clientX, y: ev.clientY };
    stopHoverAnimation(ev.clientX, ev.clientY);
  };

  React.useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      currentMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      checkHoverState();
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('scroll', handleScroll, true);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{marqueeText || text}</span>
      <div
        className="marquee__img"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

  return (
    <div className="menu__item" ref={itemRef}>
      <a
        className="menu__item-link"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu; 