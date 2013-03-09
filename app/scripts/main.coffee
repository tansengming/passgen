@Helper =
  url_val: (url) ->
    URI(url).domain().toLowerCase()
  hash_val: (password, sitename) ->
    hex_md5(password + ':' + sitename).substr(0,8)

sitename = ->
  $('#url-field').val()

niceSitename = ->
  Helper.url_val(sitename())

password = ->
  $('#master-password-field').val()

updateHash = ->
  $('#hash-field').val(Helper.hash_val(password(), niceSitename()))
  $('#site-hint small').html('Hashed with ' + niceSitename())

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
