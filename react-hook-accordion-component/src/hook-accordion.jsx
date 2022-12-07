import React, { useState } from 'react';

const HookAccordion = function (props) {
  const [open, setOpen] = useState(null);

  function handleOpen(event) {
    if (open === event.target.id) {
      setOpen(null);
    } else {
      setOpen(event.target.id);
    }
  }

  return (
    <div className="accordion-row">
      <ul>
        {
          props.accordionItems.map(item => {
            const accordionClass = open === item.title
              ? 'reveal'
              : 'hidden';
            return (
              <li key={item.title}>
                <h1 id={item.title} onClick={handleOpen}>{item.title}</h1>
                <p className={accordionClass}>{item.details}</p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default HookAccordion;
