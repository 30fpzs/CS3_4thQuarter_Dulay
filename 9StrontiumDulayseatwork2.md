# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

- Student's Answer: If one uses default static positioning, values such as 'top', 'left', 'right;, etc. does not work/matter. The object stays in its original position if the code uses static positioning. However, if one uses relative positioning, the element can be shifted/moved to a specific direction using these properties of relative positioning in css.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

- Student's Answer: Because we put "position: fixed;" in the properties of footer, the foother object will now stay in that specific part of the gadget's screen no matter how long you scroll. Position relative depends on the object's original position, but position fixed locks the object to a specific part of the screen.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

- Student's Answer: If Position: absolute is placed on an object/element, that element no longer follows the original document's flow. Instead, css places it relative to the nearest positioned ancestor (any ancestor element not using "static"). It is different from fixed becasuse fixed stays attatched to a position in the screen and absolute depends on another element for position.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

- Student's Answer: "Notice" appears on top of "content" because the z index of notice is higher than content. Z-index refers to the position "front" or "back" in layman's terms. Basically, it's the value that determins whether or not that object overlaps the other. If the z index of object 1 is less than object 2, object 1 is placed on top of object 2 in the html page. If the values are swaped, content is going to now appear on top of notice.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content). 
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
      * If content is set to relative, it remains in the normal layout but can be moved using top and left.  
      * If content is set to fixed, it becomes attached to the screen (viewport) and stays in the same position.
    * What do you observe on about the effect of z-index on .notice and .content boxes?
      * The z-index controlls which overlapping element appears in front. If I switch the z-index values of notice and content, content will appear in front and replace notice.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
      - Static: Default positioning for css
      - Relative: Keeps the element in normal flow but can be shifted from original position using 'left', 'right', etc.
      - Absolute: Removes the element in normal flow and positions it to the nearest ancestral/parental element that is not using static.
      - Fixed: Removes the element from normal flow and positions it relative to viewport so that it stays in the same position even if you scroll.

    b. How does absolute positioning depend on its parent element?
      - Absolute positioning depends on the parent element, as this is where it will "anchor" or depend on to have a position (as long as the parent element is not using static). If there is no parent, the element is positioned based on the page itself.

    c. How do you differentiate sticky from fixed (you can research on sticky)?
      - "Fixed" stays in one place all the time, even if you scroll. "Sticky" behaves like a normal element, but if you scroll too far up/down, it sticks in that position until you go back to the original position.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
      - I could use "sticky" for a schedule header so that time labels for events are always visible even if the user scrolls too far down/up.
      - I could also use "fixed" for an announcement bar so that if a new announcement is pushed, users can see it automatically.