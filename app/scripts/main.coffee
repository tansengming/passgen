@Helper =
  url_val: (url) ->
    URI(url).domain().toLowerCase()
  sha256_hash: (password, sitename) ->
    str = password + ':' + sitename
    hash = CryptoJS.SHA256(str).toString(CryptoJS.enc.Hex)
    hash.substr(0,3) + '-' + hash.substr(3,3) + '-' + hash.substr(6,3) + '-' + hash.substr(9,3)
  md5_hash: (password, sitename) ->
    str = password + ':' + sitename
    CryptoJS.MD5(str).toString(CryptoJS.enc.Hex).substr(0,8)

sitename = ->
  $('#url-field').val()

niceSitename = ->
  Helper.url_val(sitename())

password = ->
  $('#master-password-field').val()

updateHash = ->
  hasher = Helper.sha256_hash
  $('#hash-field').val(hasher(password(), niceSitename()))
  if niceSitename()
    $('#site-hint').html('Generated from ' + niceSitename())
  else
    $('#site-hint').html('Please enter a valid URL')

saveToLocalstorage = ->
  localStorage.masterpassword = password()
  localStorage.lastsite = sitename()

$('document').ready ->
  $('#master-password-field, #url-field').keyup (event) ->
    updateHash()
    saveToLocalstorage()
    false

$('document').ready ->
  if (localStorage.masterpassword)
    $('#master-password-field').val(localStorage.masterpassword)
  if (localStorage.lastsite)
    $('#url-field').val(localStorage.lastsite)
  updateHash()
