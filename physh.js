#!/usr/bin/python
# -*- coding: utf-8 -*-
# Requires Python 3.6+

import subprocess


class sh:

    def __init__(self, cmd):
        if not isinstance(cmd, str):
            raise AttributeError("the 'cmd' parameter of the shell command"
                                 "must be a string"
                                 )

        sp = subprocess.run(cmd.split(' '), stdout=subprocess.PIPE,
                            stderr=subprocess.PIPE,
                            universal_newlines=True)

        self.out = sp.stdout
        self.error = sp.stderr
        self._returncode = sp.returncode

    # check if the command finished succesfully
    def __bool__(self):
        return (True if self._returncode == 0 else False)
