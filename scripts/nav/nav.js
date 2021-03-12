export const navBar = () => {
    
    let block = `
    <button id="showAll">Show All Legos</button>
    <button id="showRed">Show Red Legos</button>
    <button id="showGreen">Show Green Legos</button>
    <label for="brickMaterial">By Material:</label>
    <select id="brickMaterial"> </select>
    <label for="search">Lego Id:</label>
    <input type="text" id="LegoId" name="LegoId">
    <label for="byYear">sort by year:</label>
    <select name="byYear" id="byYear">
        <option value="no">None</option>
        <option value="new">New to Old</option>
        <option value="old">Old to New</option>
    </select>

                `;

      return block;
    }
    export const noLegoId =   [ {
        "Id": 0,
        "Material": "Slid",
        "LegoId": "0",
        "LegoName": "LegoId Not Found",
        "LegoNameUnconfirmed": "",
        "LegoModernAbbreviation": "",
        "ColorstreamPosition": "A1",
        "ColorstreamLink": "",
        "ColorstreamLinkImage": "",
        "BricklinkId": "",
        "BricklinkName": "",
        "BricklinkNameUnconfirmed": "",
        "LdrawId": "",
        "LdrawName": "",
        "LdrawNameUnconfirmed": "",
        "PeeronName": "",
        "PeeronNameUnconfirmed": "",
        "OtherName": "",
        "Rarity": "",
        "YearFrom": "",
        "YearTo": "",
        "Notes": "The Lego Id you searched for is not valid",
        "ColorR": 244,
        "ColorG": 244,
        "ColorB": 244,
        "ColorHex": "f4f4f4",
        "ColorC": 5,
        "ColorM": 3,
        "ColorY": 4,
        "ColorK": 0,
        "ColorPantone": "CoolGrey 1 C"
      }]