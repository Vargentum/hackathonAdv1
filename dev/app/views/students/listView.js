export default class ListView {
  constructor(args) {
    
  }

  r_row({gender, id, firstName, lastName, mark1, mark2, mark3, tel}) {
    return `<tr id="${id}">
          <td class="mdl-data-table__cell--non-numeric">${firstName} ${lastName}</td>
          <td>${gender}</td>
          <td>${tel}</td>
          <td>${mark1} ${mark2} ${mark3}</td>
      </tr>`
  }

  render(data) {
    return `<table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
              <th class="mdl-data-table__cell--non-numeric">Student's name</th>
              <th>Gender</th>
              <th>Tel</th>
              <th>Last exam marks</th>
          </tr>
        </thead>
        <tbody>
          ${data.map(this.r_row.bind(this)).join('')}
        </tbody>
    </table>`
  }
}