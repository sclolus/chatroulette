var auto_start = true

select_match = () =>  { try { document.getElementById("select-button").click() } catch (e) {} }
() =>  { try { document.getElementById("select-button").click() } catch (e) {} }

start_match = () =>  { try { if (auto_start) { document.getElementById("start-button").click() } } catch (e) {} }
() =>  { try { if (auto_start) { document.getElementById("start-button").click() } } catch (e) {} }

setInterval(select_match, 500)
setInterval(start_match, 500)
