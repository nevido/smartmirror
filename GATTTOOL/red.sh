#!/usr/bin/expect
set mac 60:92:4B:18:AC:E6
spawn gatttool -b $mac -I
expect "LE"
send "connect\n"
sleep 2
expect "LE"
send "char-write-cmd 0x0025 00ff0000\n"
expect "LE"
send "exit\n"
expect eof




