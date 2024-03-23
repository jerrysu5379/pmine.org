const paratem = document.createElement("div");
paratem.classList.add("para");
paratem.style.marginTop = "5%";
paratem.innerHTML = `<div class="p table table-borderless" style="margin-top: 5%">
        <table align="center" width="90%" style="margin: 0 auto;">
          <tr>
            <td><label for="fulltitle1" style="font-size: 1rem;">标题</label></td>
            <td><input type="text" id="fulltitle1" name="fulltitle1" data-type="fulltitle" placeholder="请输入标题" style="font-size: 1rem; width: 100%;"></td>
          </tr>
          <tr>
            <td><label for="fulltitle2" style="font-size: 1rem;">(Optional) 英语标题</label></td>
            <td><input type="text" id="fulltitle2" name="fulltitle2" data-type="fulltitle" placeholder="请输入英语标题" style="font-size: 1rem; width: 100%;"></td>
          </tr>
          <tr>
            <td><label for="description" style="font-size: 1rem;">(Optional) 简短介绍</label></td>
            <td><input type="text" id="description" name="description" data-type="description" placeholder="请输入简短介绍" style="font-size: 1rem; width: 100%;"></td>
          </tr>
          <tr>
            <td><label for="emoji" style="font-size: 1rem;">(Optional) Emoji</label></td>
            <td><input type="text" id="emoji" name="emoji" data-type="emoji" placeholder="请输入 Emoji" style="font-size: 1rem; width: 100%;"></td>
          </tr>
          <tr>
            <td><label for="honmo" style="font-size: 1rem;">正文</label></td>
            <td><textarea id="honmo" name="honmo" data-type="honmo" placeholder="请输入正文" rows="10" cols="50" style="font-size: 1rem; width: 100%;"></textarea></td>
          </tr>
          <tr id="end">
            <td colspan="2" align="right"><button data-type="add" data-func="small" class="btn btn-pink mt-3 mb-3">添加分段</button><button data-type="remove" data-func="remove" class="btn btn-pink mt-3 mb-3">DELETE</button></td>
          </tr>
        </table>
      </div> `

const subparatem = document.createElement("div");
subparatem.classList.add("para");
subparatem.classList.add("sub");
subparatem.style.marginTop = "5%";
subparatem.innerHTML = `<div class="p table table-borderless" style="margin-top: 5%">
        <table align="center" width="90%" style="margin: 0 auto;">
          <tr>
            <td><label for="fulltitle1" style="font-size: 1rem;">标题</label></td>
            <td><input type="text" id="fulltitle1" name="fulltitle1" data-type="fulltitle" placeholder="请输入标题" style="font-size: 1rem; width: 100%;"></td>
          </tr>
          <tr>
            <td><label for="honmo" style="font-size: 1rem;">正文</label></td>
            <td><textarea id="honmo" name="honmo" data-type="honmo" placeholder="请输入正文" rows="10" cols="50" style="font-size: 1rem; width: 100%;"></textarea></td>
          </tr>
          <tr id="end">
            <td colspan="2" align="right"><button data-type="add" data-func="small" class="btn btn-pink mt-3 mb-3">添加分段</button><button data-type="remove" data-func="remove" class="btn btn-pink mt-3 mb-3">DELETE</button></td>
          </tr>
        </table>
      </div> `

const honmo = document.createElement("tr");
honmo.innerHTML = `<td><label for="honmo" style="font-size: 1rem;">正文</label></td>
      <td><textarea id="honmo" name="honmo" data-type="honmo" placeholder="请输入正文" rows="10" cols="50" style="font-size: 1rem; width: 100%;"></textarea></td>`


function getparatem() {
  return paratem
}

function getsubparatem() {
  return subparatem
} 

function gethonmo() { 
  return honmo 
}
