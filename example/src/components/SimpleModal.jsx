import React from 'react';

import * as modal from '@curiouser/react-modal';

export default function SimpleModal () {
  const handleClickClose = React.useCallback(() => {
    modal.close();
  }, []);

  return (
    <div className="modal__wrapper">
      <div className="modal__title">I'm a title!</div>
      <div className="modal__body">
        <p>
          This is a modal body. I'm baby flannel trust fund hot chicken, hoodie sartorial PBR&B irony schlitz bicycle rights pickled iceland direct trade ramps franzen tote bag. Roof party cloud bread artisan, coloring book shoreditch marfa la croix vice wolf. Sartorial cardigan cliche cronut, pop-up irony asymmetrical. Crucifix pop-up kickstarter migas green juice. Selvage pinterest humblebrag, plaid chartreuse tattooed vexillologist small batch mixtape. Semiotics taxidermy ennui biodiesel narwhal coloring book humblebrag. Whatever green juice offal salvia meditation tbh, sustainable ethical.
        </p>

        <p>
          This is a modal body. I'm baby flannel trust fund hot chicken, hoodie sartorial PBR&B irony schlitz bicycle rights pickled iceland direct trade ramps franzen tote bag. Roof party cloud bread artisan, coloring book shoreditch marfa la croix vice wolf. Sartorial cardigan cliche cronut, pop-up irony asymmetrical. Crucifix pop-up kickstarter migas green juice. Selvage pinterest humblebrag, plaid chartreuse tattooed vexillologist small batch mixtape. Semiotics taxidermy ennui biodiesel narwhal coloring book humblebrag. Whatever green juice offal salvia meditation tbh, sustainable ethical.
        </p>
      </div>

      <button onClick={handleClickClose} type="button">Ok, got it!</button>
    </div>
  )
}
