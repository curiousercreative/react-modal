import React from 'react';
import * as modal from '../';

export default class Modal {
  static pubsub = modal.pubsub;

  static close () {
    return modal.close();
  }
  static open () {
    return modal.open(<div className="hi">hello</div>);
  }
}
